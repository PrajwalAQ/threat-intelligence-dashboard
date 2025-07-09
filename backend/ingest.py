import csv
from models import collection

def ingest_csv(file_path):
    with open(file_path, newline='', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for index, row in enumerate(reader):
            row["_id"] = str(index)  # Safe unique ID
            collection.replace_one({"_id": row["_id"]}, row, upsert=True)

    print(f"✅ Ingested {index + 1} records successfully.")

if __name__ == "__main__":
    ingest_csv("Cybersecurity_Dataset.csv")
