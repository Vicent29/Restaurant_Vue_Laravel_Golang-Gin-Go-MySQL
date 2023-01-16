import Api from '@/services/Api'
import secret from '../secret.js'

export default {
    userRegister(data) {
        return Api(secret.GO_APP_URL).post('user/register', data);
    },
    userLogin(data) {
        return Api(secret.GO_APP_URL).post('user/login', data);
    },
    userRegisterAdmin(data) {
        return Api(secret.LARAVEL_APP_URL).post('user/register', data);
    },
    userLoginAdmin(data) {
        return Api(secret.LARAVEL_APP_URL).post('user/login', data);
    },
    getProfile() {
        return Api(secret.GO_APP_URL).get('user/profile');
    },
    getProfile_Admin() {
        return Api(secret.LARAVEL_APP_URL).get('user/profile');
    },
    getNotificationsAdmin() {
        return Api(secret.LARAVEL_APP_URL).get('reserve');
    },
    getNotificationsClient() {
        return Api(secret.GO_APP_URL).get('reserve');
    },
    getMyReserves() {
        return Api(secret.GO_APP_URL).get('reserve/myreserve');
    },
    userUpdate(data) {
        return Api(secret.GO_APP_URL).put('user/update', data);
    },
    sendNotification(data) {
        return Api(secret.GO_APP_URL).post('sendTel', data);
    },
    isAdmin() {
        return Api(secret.LARAVEL_APP_URL).get('user/isAdmin');
    },//Profile
}