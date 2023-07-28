CREATE TABLE "doctor" (
  "doctor_id" integer PRIMARY KEY,
  "name" varchar,
  "registration_id" varchar,
  "hospital" varchar
);

CREATE TABLE "patients" (
  "id" integer PRIMARY KEY,
  "name" varchar,
  "phone_number" integer,
  "aadhar_number" integer,
  "address" varchar,
  "dob" timestamp,
  "blood_group" varchar,
  "height" integer,
  "weight" integer,
  "past_hospitalization" varchar
);

CREATE TABLE "entry" (
  "entry_id" integer PRIMARY KEY,
  "patient_id" integer,
  "doctor_id" integer,
  "created_at" timestamp,
  "prescription" varchar,
  "symptoms" varchar,
  "diagnosis_report" varchar,
  "allergies" varchar,
  "surgery_details" varchar
);

CREATE TABLE "record" (
  "patient_id" integer,
  "entry_id" integer,
  "doctor_id" integer,
  PRIMARY KEY ("patient_id", "entry_id", "doctor_id")
);

ALTER TABLE "record" ADD FOREIGN KEY ("patient_id") REFERENCES "patients" ("id");

ALTER TABLE "record" ADD FOREIGN KEY ("doctor_id") REFERENCES "doctor" ("doctor_id");

ALTER TABLE "record" ADD FOREIGN KEY ("entry_id") REFERENCES "entry" ("entry_id");

ALTER TABLE "entry" ADD FOREIGN KEY ("patient_id") REFERENCES "patients" ("id");

ALTER TABLE "entry" ADD FOREIGN KEY ("doctor_id") REFERENCES "doctor" ("doctor_id");
