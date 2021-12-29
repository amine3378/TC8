import { CoachModel } from '../models/Coupon_area_train.js';//je dois changer le nom des models
import { StadiumModel } from '../models/Coupon_detail_train.js';
import { TeamModel } from '../models/Coupon_list_train.js';
import { PlayerModel } from '../models/Coupon_visit_train.js';
import { Prefecture_locationsModel } from '../models/Prefecture_locations.js';
import { PlayerModel } from '../models/User_list.js';
import fs from 'fs';

/**
 * Initialize mongodb
 */
export const init = async function () {
    try {
        // Checking if we need initialization
        const teamCount = await TeamModel.countDocuments().exec();
        console.info(`Count of teams are ${teamCount}`);
        // if we don't have teams
        if (teamCount === 0) {
            // get teams from json file
            const teams = JSON.parse(fs.readFileSync(`${process.cwd()}/Teams.json`, 'utf8'));
            for (let i = 0; i < teams.length; i++) {
                // create the coach object first
                const coachOfTeam = await CoachModel.create(teams[i].coach);
                if (coachOfTeam) {
                    //create the team
                    const team = await TeamModel.create({
                        name: teams[i].name,
                        nickname: teams[i].nickname,
                        fifaRanking: teams[i].fifaRanking,
                        points: 0,
                        coach: coachOfTeam._id,
                    });
                    if (team) {
                        for (let j = 0; j < teams[i].players.length; j++) {
                            await PlayerModel.create({
                                firstName: teams[i].players[j].firstName,
                                lastName: teams[i].players[j].lastName,
                                number: teams[i].players[j].number,
                                team: team._id,
                            })
                        }
                    }
                }
            }
        }
        // Checking if we need initialization for stadiums
        const stadiumsCount = await StadiumModel.countDocuments().exec();
        console.info(`Count of stadiums are ${stadiumsCount}`);
        // if we don't have stadiums
        if (stadiumsCount === 0) {
            // insert default stadiums
            const stadiums = JSON.parse(fs.readFileSync(`${process.cwd()}/Stadiums.json`, 'utf8'));
            for (let i = 0; i < stadiums.length; i++) {
                console.log(stadiums[i]);
                await StadiumModel.create(stadiums[i]);
            }
        }
    } catch (err) {
        console.error(err);
    }
}