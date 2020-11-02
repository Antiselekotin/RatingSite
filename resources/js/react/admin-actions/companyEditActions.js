import CompaniesService from "../admin-services/CompaniesService";
import handleError from "../admin-services/validationErrorHendler";
import {resetErrors} from './errorActions'
import {isLoadingSetFalse, isLoadingSetTrue} from './isLoadingActions'
import {successMessageReset, successMessageUpdate} from "./successMessageActions";

export const getCompanyEdit = (id) => (dispatch, getState) => {
    const apiToken = getState().apiToken;
    const companiesService = new CompaniesService(apiToken)
    companiesService.getEdit(id)
        .then(res => dispatch(updateCompanyEdit(res)))
}

export const updateCompanyEdit = (payload) => ({'type': 'companyEdit/update', payload});

export const resetCompanyEdit = () => ({'type': 'companyEdit/reset'});

export const updateCompanyMain = (id) => (dispatch, getState) => {
    const {apiToken, csrfToken, companyEdit} = getState();
    const service = new CompaniesService(apiToken);

    dispatch(resetErrors());
    dispatch(successMessageReset())
    dispatch(isLoadingSetTrue())

    service.update(csrfToken)(id, companyEdit)
        .then(body => {
            console.log(body)
            dispatch(getCompanyEdit(id))
            dispatch(successMessageUpdate({msg: ['База была успешно обновлена']}))
            dispatch(isLoadingSetFalse())
        })
        .catch(err => {
            console.log(err)
            dispatch(handleError(err))
            dispatch(isLoadingSetFalse())
        })
}
