export const sendAPI = (info) => {
    // console.log(info);
    const value1 = info.name;
    const value2 = info.mobile;
    const value3 = info.email;
    const value4 = info.industry;
    const value5 = new Date().toLocaleDateString();
    const value6 = window.location.href;
    const value7 = info.qa[0].question;
    const value8 = info.qa[0].anser;
    const value9 = info.qa[1].question;
    const value10 = info.qa[1].anser;
    const value11 = info.qa[2].question;
    const value12 = info.qa[2].anser;
    const value13 = info.qa[3].question;
    const value14 = info.qa[3].anser;
    const name1 = 'Name';
    const name2 = 'Phone';
    const name3 = 'Email';
    const name4 = 'Shop';
    const name5 = 'Date Create';
    const name6 = 'Link';
    const name7 = 'Question_1';
    const name8 = 'Anser_1';
    const name9 = 'Question_2';
    const name10 = 'Anser_2';
    const name11 = 'Question_3';
    const name12 = 'Anser_3';
    const name13 = 'Question_4';
    const name14 = 'Anser_4';
    // console.log(value1, value2, value3, value4, value5, value6, value7);

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch(`https://script.google.com/macros/s/AKfycbxSi0d08RUd2fSObwNE77mRFhS_8FSRdCMwSOIWT06yDrZ2jKeT6Xa0EE3NsWG-HDiqog/exec?${name1}=${value1}&${name2}=${value2}&${name3}=${value3}&${name4}=${value4}&${name5}=${value5}&${name6}=${value6}&${name7}=${value7}&${name8}=${value8}&${name9}=${value9}&${name10}=${value10}&${name11}=${value11}&${name12}=${value12}&${name13}=${value13}&${name14}=${value14}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result);
        })
        .catch(error => console.log('error', error));
}