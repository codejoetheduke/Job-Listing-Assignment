export const listProjects = async () => {
  const response = await fetch("http://localhost:8000/projects/");
  return response.json();
};

export const generateSchema = async (question: string) => {
  const response = await fetch("http://localhost:8000/generate-schema/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      project_name: "New Project",
      schema_type: "SQL", 
      description: question,
    }),
  });
  return response.json();
};
