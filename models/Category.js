const mongoose = require("mongoose");
const slugify = require("slugify");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    unique: true,
    require: true,
  },

  slug: {
    type: String,
    unique: true,
  },
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    Strict: true,
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);
module.exports = Category;
