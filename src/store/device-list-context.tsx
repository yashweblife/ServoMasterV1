import { createContext, useState } from "react";
import {
  DeviceContextInterface,
  DeviceInterface,
  makeRandString,
} from "../utils/utils";

export const DeviceListContext = createContext<DeviceContextInterface | null>(
  null
);

export const DeviceListContextProvider = (props: any) => {
  const [list, setList] = useState<DeviceInterface[]>([]);
  const add = (name: string, auth: string) => {
    const t = {
      id: makeRandString(),
      name: name,
      auth: auth,
    };
    const arr = [...list];
    arr.push(t);
    setList(arr);
  };
  const remove = (id: string) => {
    const arr = [...list];
    const op = arr.filter((item: DeviceInterface) => item.id != id);
    setList(op);
  };
  const edit = (id: string, name: string, auth: string) => {
    const arr = [...list];
    const data = arr.filter((item: DeviceInterface) => item.id === id)[0];
    if (data) {
      data.name = name;
      data.auth = auth;
    }
  };
  const context = {
    list: list,
    size: list.length,
    add: add,
    remove: remove,
    edit: edit,
  };

  return (
    <DeviceListContext.Provider value={context}>
      {props.children}
    </DeviceListContext.Provider>
  );
};
