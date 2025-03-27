const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
const clearBtn = document.getElementById("clear");

const updatePreview = () => {
  const markdownText = editor.value;
  preview.innerHTML = marked.parse(markdownText);

  Prism.highlightAll();
};

editor.addEventListener("input", updatePreview);

clearBtn.addEventListener("click", () => {
  editor.value = "";
  updatePreview();
});
