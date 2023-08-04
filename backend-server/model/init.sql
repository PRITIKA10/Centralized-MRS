CREATE DATABASE crms

CREATE TABLE "doctor" (
  "doctor_id" BIGSERIAL PRIMARY KEY NOT NULL,
  "name" varchar(255) NOT NULL,
  "registration_id" varchar(255),
  "hospital" varchar(255)
);

CREATE TABLE "patients" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "name" varchar(255),
  "phone_number" BIGINT,
  "aadhar_number" BIGINT,
  "address" varchar(255),
  "dob" timestamp,
);

CREATE TABLE "entry" (
  "entry_id" BIGSERIAL PRIMARY KEY NOT NULL,
  "patient_id" integer,
  "doctor_id" integer,
  "created_at" timestamp,
  "prescription" varchar,
  "symptoms" varchar,
  "diagnosis_report" varchar,
  "allergies" varchar,
  "surgery_details" varchar, 

 constraint patient_id FOREIGN KEY(patient_id) REFERENCES patients(id),
 constraint doctor_id FOREIGN KEY(doctor_id) REFERENCES doctor(doctor_id)
);

CREATE TABLE "record" (
  "patient_id"  integer,
  "entry_id" integer ,
  "doctor_id" integer ,
  PRIMARY KEY ("patient_id", "entry_id", "doctor_id"),
  constraint patient_id FOREIGN KEY(patient_id) REFERENCES patients(id),
  constraint doctor_id FOREIGN KEY(doctor_id) REFERENCES doctor(doctor_id),
  constraint entry_id FOREIGN KEY(entry_id) REFERENCES entry(entry_id)
);

CREATE TABLE "doctor_otp" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "doctor_id" INTEGER NOT NULL,
  "otp" VARCHAR(6) NOT NULL,
  "expiration_time" TIMESTAMP NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_doctor_id FOREIGN KEY ("doctor_id") REFERENCES "doctor" ("doctor_id") ON DELETE CASCADE
);

CREATE TABLE "patient_otp" (
  "id" BIGSERIAL PRIMARY KEY NOT NULL,
  "patient_id" INTEGER NOT NULL,
  "otp" VARCHAR(6) NOT NULL,
  "expiration_time" TIMESTAMP NOT NULL,
  "created_at" TIMESTAMP DEFAULT NOW(),
  CONSTRAINT fk_patient_id FOREIGN KEY ("patient_id") REFERENCES "patients" ("id") ON DELETE CASCADE
);

alter table patients drop blood_group;
alter table patients drop height;
alter table patients drop weight;
alter table patients drop past_hospitalization;

alter table entry add column blood_group varchar(10);
alter table entry add column height float;
alter table entry add column weight float;
alter table entry add column past_hospitalization varchar(255);