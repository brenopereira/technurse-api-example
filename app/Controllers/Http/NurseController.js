"use strict";

const Nurse = use("App/Models/Nurse");

class NurseController {
  async index({ response }) {
    response.json({
      nurses: await Nurse.all()
    });
  }

  async show({ params, response }) {
    response.json({
      nunrse: await Nurse.find(params.id)
    });
  }
}

module.exports = NurseController;
