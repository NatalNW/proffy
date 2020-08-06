import express from 'express';
import db from './database/connection';
import convertHourToMinutes from './utils/convertHourToMinutes';

const routes = express.Router();

interface ScheduleItem {
    week_day: number;
    from: string;
    to: string;
}

routes.post('/classes', async (req, res) => {
    const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule
    } = req.body;

    const trx = await db.transaction();

    try {
        const usersIds = await trx('users').insert({
            name,
            avatar,
            whatsapp,
            bio
        });

        const user_id = usersIds[0];

        const classesIds = await trx('classes').insert({
            subject,
            cost,
            user_id
        });

        const class_id = classesIds[0];

        const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
            return {
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(scheduleItem.from),
                to: convertHourToMinutes(scheduleItem.to)
            }
        });

        await trx('class_schedule').insert(classSchedule);

        await trx.commit();

        return res.status(201).send();
    } catch (error) {
        await trx.rollback();
        console.log(error);
        return res.status(400).json({ message: error });
    }
});

export default routes;