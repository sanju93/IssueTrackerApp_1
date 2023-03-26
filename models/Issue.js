const mongoose = require('mongoose');
const issueSchema = new mongoose.Schema({
    desc : {
        type : String,
        require : true
        
    },
    severity : {
        type : String,
        require : true
    },
    assign : {
        type : String,
        require : true
    },
    project : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Project'
    }
},{
    timestamps : true
});

const Issue = mongoose.model('Issue',issueSchema);

module.exports = Issue;