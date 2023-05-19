import React, {ReactNode} from "react";
import {Controller, useForm} from "react-hook-form";
import {
  ButtonsUnderForm,
  FormError,
  FormItem,
  FormMain,
  Modal,
  ModalContent,
  StyledDatePicker,
  StyledDatePickerWrapper,
} from "./Form.css";
import {emailPattern, namePattern, phonePattern} from "../../../patterns";
import {TFields} from "../../../pages/Participants/types";
import {useDispatch} from "react-redux";
import {ADD_NEW_PARTICIPANT} from "../../../redux/const/const";
import {CustomButton} from "../Button";
import {Input} from "../../Input";
import {PHONE_PLACEHOLDER} from "./const/const";
import "react-datepicker/dist/react-datepicker.css";
import {isAgeLessThan14} from "../../../utils";
import {useTranslation} from "react-i18next";

type ModalProps = {
  modalActive: boolean;
  setModalActive: (value: boolean) => void;
  updateData: (value: TFields) => void;
};

export const Form = ({
  modalActive,
  setModalActive,
}: ModalProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
  } = useForm({ mode: "onBlur" });

  const {t} = useTranslation()

  const dispatch = useDispatch();

  const onSubmit = (payload: any) => {
    dispatch({ type: ADD_NEW_PARTICIPANT, payload });
    setModalActive(false);
  };

  return (
    <Modal
      opacityValue={modalActive ? 0 : 1}
      onClick={() => setModalActive(false)}
    >
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <h2 style={{ color: "white" }}>{t("addingAParticipant")}</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormMain>
            <FormItem>
              {t("middleName")}
              <input
                {...register("middleName", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                  pattern: namePattern,
                })}
              />
              <FormError>
                {errors?.middleName && (
                  <p>
                    {(errors?.middleName?.message || "Ошибка!") as ReactNode}
                  </p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("name")}
              <input
                {...register("name", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                  pattern: namePattern,
                })}
              />
              <FormError>
                {errors?.name && (
                  <p>{(errors?.name?.message || "Ошибка!") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("surname")}
              <input
                {...register("surname", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  pattern: namePattern,
                })}
              />
              <FormError>
                {errors?.surname && (
                  <p>{(errors?.surname?.message || "Ошибка!") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("city")}
              <input
                {...register("city", {
                  required: "Поле обязательно к заполнению",
                  minLength: {
                    value: 5,
                    message: "Минимум 5 символов",
                  },
                  pattern: namePattern,
                })}
              />
              <FormError>
                {errors?.city && (
                  <p>{(errors?.city?.message || "Ошибка!") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("birthday")}
              <Controller
                name="birthday"
                control={control}
                rules={{ required: "Поле обязательно для заполнения" }}
                render={({ field }) => (
                  <StyledDatePickerWrapper>
                    <StyledDatePicker
                      filterDate={isAgeLessThan14}
                      dateFormat="dd/MM/yyyy"
                      selected={field.value}
                      onChange={(date) => field.onChange(date)}
                    />
                  </StyledDatePickerWrapper>
                )}
              />
              <FormError>
                {errors?.birthday && (
                    <p>{(errors?.birthday?.message || "Введите корректный адрес") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("email")}
              <input
                {...register("email", {
                  required: "Поле обязательно к заполнению",
                  pattern: emailPattern,
                })}
              />
              <FormError>
                {errors?.email && (
                  <p>{(errors?.email?.message || "Введите корректный адрес") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("phone")}
              <input
                placeholder={PHONE_PLACEHOLDER}
                {...register("phone", {
                  required: "Поле обязательно к заполнению",
                  pattern: phonePattern,
                })}
              />
              <FormError>
                {errors?.phone && (
                  <p>
                    {
                      (errors?.phone?.message ||
                        "Укажите правильный номер телефона") as ReactNode
                    }
                  </p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
              {t("distance")}
              <select
                defaultValue={10}
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
                {errors?.distance && (
                  <p>{(errors?.distance?.message || "Ошибка!") as ReactNode}</p>
                )}
              </FormError>
            </FormItem>
            <FormItem>
                <div style={{ paddingBottom: "5px" }}>{t("hasPayment")}</div>
                <Input
                  style={{ width: "100px" }}
                  type={"checkbox"}
                  {...register("hasPayment", { required: false })}
                />
            </FormItem>
          </FormMain>
          <ButtonsUnderForm>
            <CustomButton
              color="darkgray"
              type="button"
              text={t("closeButton")}
              onClick={(event) => {
                event.preventDefault();
                setModalActive(false);
              }}
            />
            <CustomButton color="#1f8c38" text={t("addButton")} type={"submit"} />
          </ButtonsUnderForm>
        </form>
      </ModalContent>
    </Modal>
  );
};
