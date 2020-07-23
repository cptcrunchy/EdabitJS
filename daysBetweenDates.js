const getDays = (date1, date2) => {
    const ONE_DAY = 1000*60*60*24//?
    return Math.round(Math.abs(date1-date2) / ONE_DAY)
}
getDays(new Date("June 14, 2019"), new Date("June 20, 2019"))//?
getDays(new Date('December 29, 2018'), new Date('January 1, 2019'))//?