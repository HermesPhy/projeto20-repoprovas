import { prisma } from "../src/database";

async function main() {
  await prisma.categories.createMany({
    data: [{ name: "Projeto" }, { name: "Prática" }, { name: "Recuperação" }],
    skipDuplicates: true,
  });

  await prisma.teachers.createMany({
    data: [
      { name: "Diego M. Pinho" },
      { name: "Bruna Hamori" },
      { name: "Maria Fernanda" },
    ],
    skipDuplicates: true,
  });

  await prisma.terms.createMany({
    data: [{ number: 1 }, { number: 2 }, { number: 3 }],
    skipDuplicates: true,
  });

  await prisma.disciplines.createMany({
    data: [
      { name: "HTML e CSS", termId: 1 },
      { name: "JavaScript", termId: 2 },
      { name: "React", termId: 3 },
      { name: "Humildade", termId: 1 },
      { name: "Planejamento", termId: 2 },
      { name: "Autoconfiança", termId: 3 },
      { name: "Show de bolinhas", termId: 1 },
      { name: "Como ser iradozo", termId: 2 },
    ],
    skipDuplicates: true,
  });

  await prisma.teachersDisciplines.createMany({
    data: [
      { disciplineId: 1, teacherId: 1 },
      { disciplineId: 2, teacherId: 1 },
      { disciplineId: 3, teacherId: 1 },

      { disciplineId: 4, teacherId: 2 },
      { disciplineId: 5, teacherId: 2 },
      { disciplineId: 6, teacherId: 2 },

      { disciplineId: 7, teacherId: 3 },
      { disciplineId: 8, teacherId: 3 },

      { disciplineId: 1, teacherId: 2 },
    ],
    skipDuplicates: true,
  });

  await prisma.tests.createMany({
    data: [
      {
        name: "Projeto 1 - Globo.com",
        pdfUrl: "https://globo.com",
        categoriesId: 1,
        teachersDisciplinesId: 1,
      },
      {
        name: "Projeto 3 - Parrot Game",
        pdfUrl: "https://google.com?q=parrots",
        categoriesId: 1,
        teachersDisciplinesId: 2,
      },
      {
        name: "Projeto 5 - Instragram React",
        pdfUrl: "https://instagram.com",
        categoriesId: 1,
        teachersDisciplinesId: 3,
      },
      {
        name: "Recuperação de HTML e CSS",
        pdfUrl: "https://google.com?q=recuperacao",
        categoriesId: 3,
        teachersDisciplinesId: 1,
      },
      {
        name: "Prática - MBTI",
        pdfUrl: "https://google.com?q=mbti",
        categoriesId: 2,
        teachersDisciplinesId: 4,
      },
      {
        name: "Prática - BatePapo",
        pdfUrl: "https://google.com?bate-papo",
        categoriesId: 2,
        teachersDisciplinesId: 4,
      },
      {
        name: "Prática - Conversas difíceis",
        pdfUrl: "https://google.com?q=conversas",
        categoriesId: 2,
        teachersDisciplinesId: 5,
      },
      {
        name: "Prática - Conversas difíceis",
        pdfUrl: "https://google.com?q=conversas",
        categoriesId: 2,
        teachersDisciplinesId: 6,
      },
      {
        name: "Prática - HUB",
        pdfUrl: "https://google.com?q=conversas",
        categoriesId: 2,
        teachersDisciplinesId: 7,
      },
      {
        name: "Prática - Recuperação",
        pdfUrl: "https://google.com?q=conversas",
        categoriesId: 3,
        teachersDisciplinesId: 8,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
