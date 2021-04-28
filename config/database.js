const mongoose = require("mongoose");
const dashboardName = process.env.MONGODB_DASHBOARD_NAME;
mongoose
  .connect(`mongodb://localhost/eventDashboard`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
