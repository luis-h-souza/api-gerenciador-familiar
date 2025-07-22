/*
  Warnings:

  - The primary key for the `familia_usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `usuario_id` to the `familia` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `id_usuario` on the `familia_usuarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `id_familia` on the `familia_usuarios` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "familia" ADD COLUMN     "usuario_id" UUID NOT NULL;

-- AlterTable
ALTER TABLE "familia_usuarios" DROP CONSTRAINT "familia_usuarios_pkey",
DROP COLUMN "id_usuario",
ADD COLUMN     "id_usuario" UUID NOT NULL,
DROP COLUMN "id_familia",
ADD COLUMN     "id_familia" UUID NOT NULL,
ADD CONSTRAINT "familia_usuarios_pkey" PRIMARY KEY ("id_usuario", "id_familia");

-- AddForeignKey
ALTER TABLE "familia_usuarios" ADD CONSTRAINT "familia_usuarios_id_familia_fkey" FOREIGN KEY ("id_familia") REFERENCES "familia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "familia_usuarios" ADD CONSTRAINT "familia_usuarios_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id") ON DELETE CASCADE ON UPDATE CASCADE;
