function Footer() {
  const text = "<strong>All rights reserved ©</strong>";

  return <div
    dangerouslySetInnerHTML={{ __html: text }}
  >
  </div>;
}

