import React, {ReactNode} from 'react';
import {DetailItem, DetailItemTitle, DetailMain, ParticipantsDetailsContainer} from "./ParticipantsDetailsPage.css";
import {Controller, useForm} from "react-hook-form";
import {
    ButtonsUnderForm, ErrorContainer, FormError,
    HasPaymentMain,
    StyledDatePicker,
    StyledDatePickerWrapper
} from "../../../components/ui/Form/Form.css";
import {isAgeLessThan14} from "../../../utils";
import {Input} from "../../../components/Input";
import {CustomButton} from "../../../components/ui/Button";
import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {TParticipant} from "../../../redux/types/participant";
import {emailPattern, namePattern, phonePattern} from "../../../patterns";

interface IProps {
    definiteUser: any,
    onDeleteUser: () => void,
    onSubmit: (data: TParticipant) => void
}

const ParticipantDetailsComponent = ({ definiteUser, onDeleteUser, onSubmit }: IProps) => {

    const {t} = useTranslation()

    const navigate = useNavigate()

    const { register, handleSubmit, control, formState: {errors}} = useForm({
        defaultValues: {
            id: definiteUser?.id,
            name: definiteUser?.name,
            middleName: definiteUser?.middleName,
            surname: definiteUser?.surname,
            city: definiteUser?.city,
            birthday: definiteUser?.birthday,
            email: definiteUser?.email,
            phone: definiteUser?.phone,
            distance: definiteUser?.distance,
            hasPayment: definiteUser?.hasPayment,
        },
        mode: "onBlur",
    });

    return (
        <ParticipantsDetailsContainer>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                <DetailMain>
                    <h2 style={{ color: "white" }}>{t("detailInfoTitle")}</h2>
                    <DetailItem>
                        <DetailItemTitle>{t("middleName")}</DetailItemTitle>
                        <input {...register("middleName", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов",
                            },
                            pattern: namePattern,
                        })} />
                        <FormError>
                            {errors?.middleName && (
                                <ErrorContainer>
                                    {(errors?.middleName?.message || "Ошибка!") as ReactNode}
                                </ErrorContainer>
                            )}
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("name")}</DetailItemTitle>
                        <input {...register("name", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов",
                            },
                            pattern: namePattern,
                        })} />
                        <FormError>
                            <ErrorContainer>
                            {errors?.name && (
                                <p>{(errors?.name?.message || "Ошибка!") as ReactNode}</p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("surname")}</DetailItemTitle>
                        <input {...register("surname", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 3,
                                message: "Минимум 3 символа",
                            },
                            pattern: namePattern,
                        })} />
                        <FormError>
                            <ErrorContainer>
                            {errors?.surname && (
                                <p>{(errors?.surname?.message || "Ошибка!") as ReactNode}</p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("city")}</DetailItemTitle>
                        <input {...register("city", {
                            required: "Поле обязательно к заполнению",
                            minLength: {
                                value: 5,
                                message: "Минимум 5 символов",
                            },
                            pattern: namePattern,
                        })} />
                        <FormError>
                            <ErrorContainer>
                            {errors?.city && (
                                <p>{(errors?.city?.message || "Ошибка!") as ReactNode}</p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("birthday")}</DetailItemTitle>
                        <Controller
                            name="birthday"
                            control={control}
                            rules={{ required: "Поле обязательно для заполнения" }}
                            render={({ field }) => (
                                <StyledDatePickerWrapper>
                                    <StyledDatePicker
                                        filterDate={isAgeLessThan14}
                                        dateFormat="dd/MM/yyyy"
                                        selected={field?.value}
                                        onChange={(date) => field.onChange(date)}
                                    />
                                </StyledDatePickerWrapper>
                            )}
                        />
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("email")}</DetailItemTitle>
                        <input {...register("email", {
                            required: "Поле обязательно к заполнению",
                            pattern: emailPattern,
                        })} />
                        <FormError>
                            <ErrorContainer>
                            {errors?.email && (
                                <p>{(errors?.email?.message || "Введите корректный адрес") as ReactNode}</p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("phone")}</DetailItemTitle>
                        <input {...register("phone", {
                            required: "Поле обязательно к заполнению",
                            pattern: phonePattern,
                        })} />
                        <FormError>
                            <ErrorContainer>
                            {errors?.phone && (
                                <p>
                                    {
                                        (errors?.phone?.message ||
                                            "Укажите правильный номер телефона") as ReactNode
                                    }
                                </p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("distance")}</DetailItemTitle>
                        <select
                            defaultValue={String(definiteUser?.distance)}
                            {...register("distance", {
                                required: true,
                                valueAsNumber: true,
                            })}
                        >
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                        </select>
                        <FormError>
                            <ErrorContainer>
                            {errors?.distance && (
                                <p>{(errors?.distance?.message || "Ошибка!") as ReactNode}</p>
                            )}
                            </ErrorContainer>
                        </FormError>
                    </DetailItem>
                    <DetailItem>
                        <DetailItemTitle>{t("hasPayment")}</DetailItemTitle>
                        <HasPaymentMain>
                            <Input
                                style={{ width: "100px" }}
                                type={"checkbox"}
                                {...register("hasPayment", { required: false })}
                            />
                        </HasPaymentMain>
                    </DetailItem>
                    <ButtonsUnderForm>
                        <CustomButton
                            color="darkgray"
                            text={t("closeButton")}
                            onClick={() => navigate("/participants/")}
                        />
                        <CustomButton color="red" text={t("deleteButton")} onClick={onDeleteUser} />
                        <CustomButton color="#1f8c38" text={t("saveButton")} type="submit" />
                    </ButtonsUnderForm>
                </DetailMain>
            </form>
        </ParticipantsDetailsContainer>
    );
};

export const ParticipantDetailView = React.memo(ParticipantDetailsComponent)