import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";
import {TableMain} from "./index.css";
import {ThemeContext} from "../../../Context/ThemeProvider";
import {useTranslation} from "react-i18next";

interface TOptions<T extends Array<{[key: string]: string | number | boolean}>> {
  values: T;
  keys: Array<{ key: keyof T[number]; value: string; sortFn: (value: keyof T[number]) => void }>;
}

interface IProps<T extends Array<{[key: string]: string | number | boolean}>> {
  options: TOptions<T>;
}

export const TableView = <T extends Array<{id: string | number} & {[key: string]: string | number | boolean}>>(props: IProps<T>) => {

  const {t} = useTranslation()

  const {theme} = useContext(ThemeContext)

  const navigate = useNavigate();

  const { options } = props;

  const keys = options.keys;

  return (
    <TableMain color={theme === "light" ? "black" : "#c9c9c9"}>
      <table>
        <thead>
          <tr>
            {keys.map(({ value, sortFn }) => {
              return (
                <th
                  onClick={() => {
                    sortFn(value);
                  }}
                >
                  {t(value) as string}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {options.values.map((par) => (
            <tr
              onClick={() => navigate(`/participants/${par.id}`)}
              key={par.id}
            >
              {Object.keys(par).map((key) => {
                return <td>{par[key]}</td>
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </TableMain>
  );
};
