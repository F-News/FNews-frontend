import ApiRequest from "../utils/requests";

export default class Api extends ApiRequest {
    signUp = (username, email, password, name) => this.post('/users/', {username, email, password, name});
    signIn = (username, password) => this.get('/user/auth/', {username, password});
    getUser = () => {
        return {
            ok_: true,
            username: 'serg',
            email: 'some@mail.ru',
            name: 'Сергей',
        }
    }//this.get('/user');
    updateUser = ({username, email, name}) => this.put('/user', {username, email, name});
    signOut = () => this.delete('/user/session');
    updatePassword = (oldPassword, newPassword) => this.put('/user/password', {oldPassword, newPassword});

    getHistory = () => /*{
        return {
            ok_: true,
            actions: [{action: 'topup', message: '+ 2150 €', date: 'timestamp'}, {action: 'withdraw', message: '- 100 $', date: 'timestamp'}]
        };
    }*/this.get('/history');
    getUserBalance = () => {
        return {
            ok_: true,
            currencies: [
                {name: 'uah', value: 10},
                {name: 'krw', value: 1120.4},
                {name: 'usd', value: 0.632},
            ],
        }
    }//this.get('/balance/currencies');

    getCurrencies = () => {
        return {
            ok_: true,
            currencies: [
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "KZT", value: '7.3', percents: '2.8'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "TRY", value: '3324.3', percents: '-2.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
            ]
        }
    }//this.get('/currencies');
    getAllCurrencies = () => {
        return {
            ok_: true,
            currencies: [
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "EUR", value: '88', percents: '3.35'},
                {name: "KZT", value: '7.3', percents: '2.8'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "XDR", value: '34.3', percents: '-6.40'},
                {name: "TRY", value: '3324.3', percents: '-2.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
                {name: "INR", value: '398.2', percents: '-9.40'},
            ]
        }//this.get('/currencies/all');
    }

    getNews = () => {
        return {
            ok_: true,
            news: [
                {title: 'Технологии электронного носа помогут различать виски',
                    date: '12.04.2022',
                    source: 'RussiaToday',
                    description: 'Исследователи из Технологического университета Сиднея в Австралии разработали NOS.E, устройство, которое может найти различия между виски, «нюхая» их.\n' +
                      '\n' +
                      'Опытные любители виски считают, что они могут почувствовать разницу, вкус и запах между первоклассными спиртными напитками и дешевым «суррогатом». Но даже самые искушенные ценители все равно могут стать жертвами мошенничества, которое, вы наверное и не знали, становится растущей проблемой для индустрии виски.',
                tags: ['кулинария']},
                {title: 'Технологии электронного носа помогут различать виски',
                    date: '12.04.2022',
                    source: 'RussiaToday',
                    description: 'Исследователи из Технологического университета Сиднея в Австралии разработали NOS.E, устройство, которое может найти различия между виски, «нюхая» их.\n' +
                      '\n' +
                      'Опытные любители виски считают, что они могут почувствовать разницу, вкус и запах между первоклассными спиртными напитками и дешевым «суррогатом». Но даже самые искушенные ценители все равно могут стать жертвами мошенничества, которое, вы наверное и не знали, становится растущей проблемой для индустрии виски.',
                    tags: ['Кулинария']},
                {title: 'Технологии электронного носа помогут различать виски',
                    date: '12.04.2022',
                    source: 'RussiaToday',
                    description: 'Исследователи из Технологического университета Сиднея в Австралии разработали NOS.E, устройство, которое может найти различия между виски, «нюхая» их.\n' +
                      '\n' +
                      'Опытные любители виски считают, что они могут почувствовать разницу, вкус и запах между первоклассными спиртными напитками и дешевым «суррогатом». Но даже самые искушенные ценители все равно могут стать жертвами мошенничества, которое, вы наверное и не знали, становится растущей проблемой для индустрии виски.',
                    tags: ['Финансы']},
                {title: 'Технологии электронного носа помогут различать виски',
                    date: '12.04.2022',
                    source: 'RussiaToday',
                    description: 'Исследователи из Технологического университета Сиднея в Австралии разработали NOS.E, устройство, которое может найти различия между виски, «нюхая» их.\n' +
                      '\n' +
                      'Опытные любители виски считают, что они могут почувствовать разницу, вкус и запах между первоклассными спиртными напитками и дешевым «суррогатом». Но даже самые искушенные ценители все равно могут стать жертвами мошенничества, которое, вы наверное и не знали, становится растущей проблемой для индустрии виски.',
                    tags: ['Политика', 'Технологии']},
                {title: 'Технологии электронного носа помогут различать виски',
                    date: '12.04.2022',
                    source: 'RussiaToday',
                    description: 'Исследователи из Технологического университета Сиднея в Австралии разработали NOS.E, устройство, которое может найти различия между виски, «нюхая» их.\n' +
                      '\n' +
                      'Опытные любители виски считают, что они могут почувствовать разницу, вкус и запах между первоклассными спиртными напитками и дешевым «суррогатом». Но даже самые искушенные ценители все равно могут стать жертвами мошенничества, которое, вы наверное и не знали, становится растущей проблемой для индустрии виски.',
                    tags: []},
            ]
        }
    }

    doExchange = ({nameFrom, nameTo, valueTo}) => this.put('/exchange', {nameFrom, nameTo, valueTo});

    addCurrency = (name) => this.post('/currency', {name});
    removeCurrency = (name) => this.delete('/currency', {name});

    topup = (value) => this.post('/wallet/topup', {value});
    withdraw = (value) => this.post('/wallet/withdraw', {value});
}
