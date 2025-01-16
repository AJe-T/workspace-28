const serverUrl: string = "http://localhost:9000";
import axios from "axios";
import { IUsers } from "../models/IUsers";

export const getAllContacts = (): Promise<{ data: IUsers[] }> => {
  const dataurl: string = `${serverUrl}/contacts`;
  return axios.get(dataurl);
};

export const getContact = (contactId: string) => {
  const dataurl: string = `${serverUrl}/contacts/${contactId}`;
  return axios.get(dataurl);
};

export const crateContacts = (contact: IUsers) => {
  const dataurl: string = `${serverUrl}/contacts/`;
  return axios.post(dataurl, contact);
};

export const updateContacts = (contact: IUsers, contactId: string) => {
  const dataurl: string = `${serverUrl}/contacts/${contactId}`;
  return axios.put(dataurl);
};

export const deleteContacts = (contactId: string) => {
  const dataurl: string = `${serverUrl}/contacts/${contactId}`;
  return axios.delete(dataurl);
};

export const getAllgroups = () => {
  const dataurl: string = `${serverUrl}/groups/`;
  return axios.get(dataurl);
};

export const getgroup = (contact: IUsers) => {
  const { groupId } = contact;
  const dataurl: string = `${serverUrl}/groups/${groupId}`;
  return axios.get(dataurl);
};
