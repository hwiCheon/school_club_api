const { Schema, model } = require("mongoose");

const memberSchema = new Schema(
  {
    name: { type: String, required: true },
    number: { type: String, required: true },
    phone: { type: String, required: true },
  },
  { timestamps: true }
);

exports.memberModel = model("member", memberSchema);
