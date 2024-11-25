const AdminService = require('../services/adminService');

class AdminController {
  async createAdmin(req, res) {
    try {
      const admin = await adminService.createAdmin(req.body);
      res.status(201).json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error creating admin' });
    }
  }

  async getAdmins(req, res) {
    try {
      const admins = await adminService.getAdmins();
      res.json(admins);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving admins' });
    }
  }

  async getAdminById(req, res) {
    try {
      const admin = await adminService.getAdminById(req.params.id);
      if (!admin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      res.json(admin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error:  'Error retrieving admin' });
    }
  }

  async updateAdmin(req, res) {
    try {
      const updatedAdmin = await adminService.updateAdmin(req.params.id, req.body);
      if (!updatedAdmin) {
        return res.status(404).json({ error: 'Admin not found' });
      }
      res.json(updatedAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error updating admin' });
    }
  }

  async deleteAdmin(req, res) {
    try {
      await adminService.deleteAdmin(req.params.id);
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error deleting admin' });
    }
  }
}

module.exports = new AdminController();