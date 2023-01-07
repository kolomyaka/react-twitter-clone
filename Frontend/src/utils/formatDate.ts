import moment from 'moment';
import 'moment/locale/ru';

moment.locale('ru')

export const formatDate = (date: Date, format : string = 'DD.MM.YYYY', diff:boolean = false):string => {
    if (!diff) {
        return moment(date).format(format)
    } else {
        let now = moment()
        let tweetDate = moment(date)
        var duration = moment.duration(tweetDate.diff(now))
        let test = moment.duration(duration, "minutes").locale("ru").humanize(true); // in a minute
        return test;
    }

}