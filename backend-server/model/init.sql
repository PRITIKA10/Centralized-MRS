
CREATE TABLE "record" (
  "patient_id"  integer,
  "entry_id" integer ,
  "doctor_id" integer ,
  PRIMARY KEY ("patient_id", "entry_id", "doctor_id"),
  constraint patient_id FOREIGN KEY(patient_id) REFERENCES patients(id),
  constraint doctor_id FOREIGN KEY(doctor_id) REFERENCES doctor(doctor_id),
  constraint entry_id FOREIGN KEY(entry_id) REFERENCES entry(entry_id)
);