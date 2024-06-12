"use client";

import { useState } from "react";

function FormMigrasi() {
  const [domainName, setDomainName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = () => {
    alert(domainName);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-10 text-base placeholder:text-[#979BA4]"
    >
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="domainName" className="hidden capitalize md:block">
          nama domain
        </label>
        <input
          id="domainName"
          type="text"
          placeholder="nama domain"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={domainName}
          onChange={(e) => setDomainName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="name" className="hidden capitalize md:block">
          nama
        </label>
        <input
          id="name"
          type="text"
          placeholder="nama"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="name" className="hidden capitalize md:block">
          alamat email
        </label>
        <input
          id="email"
          type="text"
          placeholder="alamat email"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="name" className="hidden capitalize md:block">
          alamat
        </label>
        <input
          id="address"
          type="text"
          placeholder="alamat"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="city" className="hidden capitalize md:block">
          kota
        </label>
        <input
          id="city"
          type="text"
          placeholder="kota"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="zipCode" className="hidden capitalize md:block">
          kode pos
        </label>
        <input
          id="zipCode"
          type="text"
          placeholder="kode pos"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-3 items-center text-nowrap">
        <label htmlFor="phoneNumber" className="hidden capitalize md:block">
          nomor telepon
        </label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="nomor telepon"
          className="col-span-3 w-full rounded-md border border-[#DEE0E3] p-2 placeholder:capitalize md:col-span-2"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center rounded-md bg-primary py-2 text-lg font-medium capitalize text-white"
      >
        order
      </button>
    </form>
  );
}

export default FormMigrasi;
