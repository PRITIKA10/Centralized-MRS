CREATE DATABASE mrs

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
  "blood_group" varchar(255),
  "height" integer,
  "weight" integer,
  "past_hospitalization" varchar(255)
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
