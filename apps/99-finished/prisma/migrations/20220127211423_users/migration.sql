/*
  Warnings:

  - Added the required column `jokesterId` to the `Joke` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "username" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Joke" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "jokesterId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    CONSTRAINT "Joke_jokesterId_fkey" FOREIGN KEY ("jokesterId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Joke" ("content", "createdAt", "id", "name", "updatedAt") SELECT "content", "createdAt", "id", "name", "updatedAt" FROM "Joke";
DROP TABLE "Joke";
ALTER TABLE "new_Joke" RENAME TO "Joke";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
