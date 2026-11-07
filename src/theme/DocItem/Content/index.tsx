import React from "react";
import Content from "@theme-original/DocItem/Content";
import type ContentType from "@theme/DocItem/Content";
import type { WrapperProps } from "@docusaurus/types";
import { useDoc } from "@docusaurus/plugin-content-docs/client";
import Translate, { translate } from "@docusaurus/Translate";
import styles from "./styles.module.css";

type Props = WrapperProps<typeof ContentType>;

/** Page types from docs-spec/WRITING.md. Landing pages get no badge. */
const LABELS: Record<string, string> = {
  tutorial: translate({ id: "doc.type.tutorial", message: "Tutorial" }),
  "how-to": translate({ id: "doc.type.how-to", message: "How-to" }),
  concept: translate({ id: "doc.type.concept", message: "Concept" }),
  reference: translate({ id: "doc.type.reference", message: "Reference" }),
};

export default function ContentWrapper(props: Props): React.JSX.Element {
  const { frontMatter } = useDoc();
  const { type, untranslated } = frontMatter as { type?: string; untranslated?: boolean };
  const label = type ? LABELS[type] : undefined;
  return (
    <>
      {label && (
        <span className={styles.badge} data-type={type}>
          {label}
        </span>
      )}
      {untranslated && (
        <div className="alert alert--secondary margin-bottom--md" role="note">
          <Translate id="doc.untranslated">This page is not translated yet. You are reading the English version.</Translate>
        </div>
      )}
      <Content {...props} />
    </>
  );
}
