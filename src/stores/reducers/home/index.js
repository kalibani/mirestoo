// home Reducers
// --------------------------------------------------------

// import {
//   SET_LOADING,
//   CLEAR_ERROR,
//   SET_ERROR,
//   INIT_DATA,
//   SET_STEP_CONTENT,
//   SET_DOUBLE_SUBMIT,
//   SET_ERROR_OTP,
//   CLEAR_ERROR_OTP,
//   SET_OTP_BLOCKED,
//   SET_FORM_SUBMITTING
// } from 'stores/actions/home';

const initialState = {
  isLoading: false,
  isDoubleSubmit: false,
  isOTPBlocked: false,
  isSubmitting: false,
  stepContent: '',
  error: {},
  errRespOTP: {}
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    // case SET_LOADING:
    //   return {
    //     ...state,
    //     isLoading: payload
    //   };
    // case SET_FORM_SUBMITTING:
    //   return {
    //     ...state,
    //     isSubmitting: payload
    //   };
    // case SET_ERROR_OTP:
    //   return {
    //     ...state,
    //     errRespOTP: payload
    //   };
    // case CLEAR_ERROR_OTP:
    //   return {
    //     ...state,
    //     errRespOTP: {}
    //   };
    // case SET_OTP_BLOCKED:
    //   return {
    //     ...state,
    //     isOTPBlocked: payload
    //   };
    // case SET_DOUBLE_SUBMIT:
    //   return {
    //     ...state,
    //     isDoubleSubmit: payload
    //   };
    // case SET_ERROR:
    //   return {
    //     ...state,
    //     error: payload
    //   };
    // case CLEAR_ERROR:
    //   return {
    //     ...state,
    //     error: {}
    //   };
    // case SET_STEP_CONTENT:
    //   return {
    //     ...state,
    //     stepContent: payload
    //   };
    // case INIT_DATA:
    //   return {
    //     ...initialState
    //   };
    default:
      return state;
  }
};
