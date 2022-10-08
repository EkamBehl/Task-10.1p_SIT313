const { faker } = require('@faker-js/faker');
const contentList=[

    {
        "key":"0",
        "username":faker.name.firstName(),
        "icon": faker.image.business(),
        "description":faker.lorem.lines(2),
        "rating":"2",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "key":"1",
        "username":faker.name.firstName(),
        "icon": faker.image.abstract(),
        "description":faker.lorem.lines(2),
        "rating":"4",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "key":"2",
        "username":faker.name.firstName(),
        "icon": faker.image.cats(),
        "description":faker.lorem.lines(2),
        "rating":"4",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "key":"3",
        "username":faker.name.firstName(),
        "icon": faker.image.business(),
        "description":faker.lorem.lines(2)
    }

]
export const tutorialList=[
    {
        "username":faker.name.firstName(),
        "icon": faker.image.animals(),
        "description":faker.lorem.lines(2),
        "rating":"3",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "username":faker.name.firstName(),
        "icon": faker.image.food(),
        "description":faker.lorem.lines(2),
        "rating":"1",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "username":faker.name.firstName(),
        "icon": faker.image.city(),
        "description":faker.lorem.lines(2),
        "rating":"2",
        "articleName":faker.name.jobDescriptor()
    },
    
    {
        "rating":"4",
        "username":faker.name.firstName(),
        "icon": faker.image.abstract(),
        "description":faker.lorem.lines(2)
    }

]
export default contentList;