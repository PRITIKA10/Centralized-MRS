const getallrecords = (req, res)=>{
    res.send('medical records')
}

const createrecord = (req, res)=>{
    res.send('Create medical record')
}

const getrecord = (req, res)=>{
    res.send('Get medical records')
}

const updaterecord = (req, res)=>{
    res.send('Update medical records')
}

const deleterecord = (req, res)=>{
    res.send('Delete medical records')
}

module.exports = {
    getallrecords, createrecord, getrecord, deleterecord, updaterecord
}