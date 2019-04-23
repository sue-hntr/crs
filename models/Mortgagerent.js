const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const MortgagerentSchema = new Schema({
    rental: { type: Boolean},
    owner: { type: Boolean},
    mortage:{ type: Boolean},
    typeofloan: { type: String }, 
    loannum: { type: String },
    mortgageconame: { type: String },
    mortgagecoaddress1: { type: String },
    mortgagecoaddress2: { type: String },
    mortgagecocity: { type: String },
    mortgagecostate: { type: String },
    mortgagecozip: { type: String },
    mortgagecophone: { type: String },
    mortgagecofax: { type: String },
    mortgagecoemail: { type: String },
    loanbalance:  { type: Number },
    totalinarrears:  { type: Number },
    proptaxdelinquent: { type: Boolean},
    totaltaxdelinquent:  { type: Number },
  
  });
  
  const Mortgagerent = mongoose.model("Mortgagerent", MortgagerentSchema);
  
  module.exports = Mortgagerent;
  