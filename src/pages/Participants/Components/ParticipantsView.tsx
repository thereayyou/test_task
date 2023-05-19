import React, {useState} from "react";
import {ParticipantsPageMain, ParticipantsPageMainContainer, TopOfPageContainer,} from "./index.css";
import {Pagination} from "../../../components/ui/Pagination";
import {Form} from "../../../components/ui/Form";
import {TFields, TParticipantFields} from "../types";
import {TableView} from "../../../components/ui/Table";
import {Input} from "../../../components/Input";
import {CustomButton} from "../../../components/ui/Button";
import {TParticipant} from "../../../redux/types/participant";
import {useTranslation} from "react-i18next";

type TRecords = Pick<TParticipant, 'id' | 'name' | 'middleName' | 'surname' | 'city' | 'distance'>

type TProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  sortField: (field: TParticipantFields) => void;
  records: Array<TRecords>;
  currentPage: number;
  setCurrentPage: (value: number) => void;
  numberOfPages: number;
  pages: Array<number>;
  updateData: (value: TFields) => void;
};

const fieldsNames = {
  id: "id",
  surname: "Фамилия",
  name: "Имя",
  middleName: "Отчество",
  city: "Город",
  distance: "Дистанция",
};

const ParticipantsComponent = ({
  searchQuery,
  setSearchQuery,
  sortField,
  records,
  currentPage,
  setCurrentPage,
  numberOfPages,
  pages,
  updateData,
}: TProps) => {

  const {t} = useTranslation()

  const [modalActive, setModalActive] = useState(false);

  const keys: Array<Exclude<TParticipantFields, 'phone' | 'birthday' | 'email' | 'hasPayment'>> = ['id', 'middleName', 'name' , 'surname', 'city', 'distance']

  const options = {
    keys: keys.map((el) => {
      return { key: el, value: fieldsNames[el], sortFn: () => sortField(el) };
    }),
    values: records,
  };

  return (
    <ParticipantsPageMainContainer>
      <ParticipantsPageMain>
        <TopOfPageContainer>
        <Input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
        />
          <CustomButton
              text={t("addParticipant")}
              color="#1f8c38"
              onClick={() => {
                setModalActive(true);
              }}
          />
        </TopOfPageContainer>
        <TableView options={options} />
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
            numbers={pages}
          />
        {modalActive && (
          <Form
            updateData={updateData}
            modalActive={modalActive}
            setModalActive={setModalActive}
          />
        )}
      </ParticipantsPageMain>
    </ParticipantsPageMainContainer>
  );
};

export const ParticipantsView = React.memo(ParticipantsComponent);
