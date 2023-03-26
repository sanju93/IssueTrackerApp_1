const mongoose = require('mongoose');
const projectSchema = mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    desc : {
        type : String,
        require : true
    },
    issue : [{type : mongoose.Schema.Types.ObjectId,ref : 'Issue'}]
},{
    timestamps : true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;