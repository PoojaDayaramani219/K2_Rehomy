export enum ApiMethod {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE'
}

export enum EndPoints {
  // sign up 
  register_customer_request = "be_api/customer/auth/register_customer_request",
  register_customer_success = "be_api/customer/auth/register_customer_success",

  // sign in
  login_customer = "be_api/customer/auth/login_customer",
  login_customer_cookies = "be_api/customer/auth/login_customer_cookies",

  // logout
  customer_logout = "be_api/customer/auth/customer_logout",

  // password
  customer_change_password = "be_api/customer/auth/customer_change_password",
  customer_forgot_password = "be_api/customer/auth/customer_forgot_password",
  customer_reset_password = "be_api/customer/auth/customer_reset_password",

    // country state city api's
    get_country_detail = "be_api/admin/auth/get_country_detail",
    get_state_detail = "be_api/admin/auth/get_state_detail",
    get_city_detail = "be_api/admin/auth/get_city_detail"

}

export enum UtilVariable {
    ENCRYPT_KEY = 'ArtTTTd22457fjklllMKKDERYU2358899MDaTyupe987R',
    GEOAPI_KEY = '43a2a8591aa04a2181d83df24f76b2d9',

}
