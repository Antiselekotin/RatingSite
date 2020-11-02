import React from 'react';
import Input from "../Input";
import inputOnChange from "../../admin-services/inputOnChange";
import {useDispatch, connect} from "react-redux";
import Textarea from "../Textarea";

const CompanyStatistics = ({companyEdit}) => {
    return (
        <div className="page-wrapper card m-3 p-3 col-8">
            {
                fields.map(({field, label})=>
                    <Input field={field}
                           label={label}
                           ReduxObj={companyEdit}
                           onChange={inputOnChange(useDispatch)(field, companyEdit)}
                           key={field}
                            disabled/>)
            }
            {
                textarias.map(({field, label}) => {
                    return (
                        <Textarea field={field}
                                  label={label}
                                  ReduxObj={companyEdit}
                                  onChange={inputOnChange(useDispatch)(field, companyEdit)}
                                  key={field}
                                disabled/>
                    )

                })
            }
        </div>
    )
}

const mapStateToProps = ({companyEdit}) => ({companyEdit})

export default connect(mapStateToProps)(CompanyStatistics);

const fields = [
    {
        'field': 'company_average_mark',
        'label': 'Средняя оценка'
    },
    {
        'field': 'company_average_mark_yandex',
        'label': 'Средняя оценка Яндекс'
    },
    {
        'field': 'company_average_mark_google',
        'label': 'Средняя оценка Google'
    },
    {
        'field': 'company_average_mark_otzovick',
        'label': 'Средняя оценка Отзовик'
    },
    {
        'field': 'company_average_mark_yell',
        'label': 'Средняя оценка Yell'
    },
    {
        'field': 'company_average_mark_flamp',
        'label': 'Средняя оценка Flamp'
    },
    {
        'field': 'company_quantity_review',
        'label': 'Количество отзывов'
    },
    {
        'field': 'company_quantity_review_yandex',
        'label': 'Количество отзывов Яндекс'
    },
    {
        'field': 'company_quantity_review_google',
        'label': 'Количество отзывов Google'
    },
    {
        'field': 'company_quantity_review_otzovick',
        'label': 'Количество отзывов Отзовик'
    },
    {
        'field': 'company_quantity_review_yell',
        'label': 'Количество отзывов Yell'
    },
    {
        'field': 'company_quantity_review_flamp',
        'label': 'Количество отзывов Flamp'
    },
    {
        'field': 'company_negative',
        'label': 'Количество негитивних отзывов'
    },
    {
        'field': 'company_positive',
        'label': 'Количество позитивних отзывов'
    }
]

const textarias = [

]
