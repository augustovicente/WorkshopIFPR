import { Router } from 'express';
import mainController from '../controllers/main.controller';

const main_router = Router();

main_router.route('/user-types').get(mainController.listUserTypes);
main_router.route('/create-user').post(mainController.createUser);
main_router.route('/users').get(mainController.listUsers);

export default main_router;