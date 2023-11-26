const ProjectsModel = require('../services/projectsService');

const uri = 'mongodb://127.0.0.1:27017';
const projectsModel = new ProjectsModel(uri);

// Connect to MongoDB
projectsModel.connect();

const projectsController = {
    submitForm: async (req, res) => {
        const formData = req.body;
        const result = await projectsModel.submitForm(formData);
        res.status(result.success ? 200 : 500).json(result);
    },

    closeConnection: async () => {
        await projectsModel.closeConnection();
    },
};

module.exports = projectsController;
