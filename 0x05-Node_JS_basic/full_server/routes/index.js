import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

/**
 * Function mapRoutes
 * @param {Object} app - Express app
 */
const mapRoutes = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
};

export default mapRoutes;
