import { readFile, writeFile } from "node:fs/promises";

interface InputData {
  _id: string;
  startDate: string;
  endDate: string;
  user: { _id: string; name: string };
}

interface UserVacations {
  userId: string;
  name: string;
  weekendDates: Array<{ startDate: string; endDate: string }>;
}

function groupVacations(data: InputData[]): UserVacations[] {
  const storage = new Map<string, UserVacations>();

  for (const item of data) {
    const userId = item.user._id;
    let userEntry = storage.get(userId);

    if (!userEntry) {
      userEntry = {
        userId,
        name: item.user.name,
        weekendDates: [],
      };
      storage.set(userId, userEntry);
    }

    userEntry.weekendDates.push({
      startDate: item.startDate,
      endDate: item.endDate,
    });
  }

  return Array.from(storage.values());
}

async function main() {
  try {
    const data = await readFile("./index.json", "utf-8");
    const input: InputData[] = JSON.parse(data);
    const processedData = groupVacations(input);

    await writeFile(
      "./output.json",
      JSON.stringify(processedData, null, 2),
      "utf-8",
    );
    console.log("Grouped vacation records written to output.json");
  } catch (error) {
    console.error("Failed:", error);
    process.exitCode = 1;
  }
}

main();
