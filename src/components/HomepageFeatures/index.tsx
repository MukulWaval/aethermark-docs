import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import PerformanceIcon from "@site/static/img/PerformanceIcon.svg";
import CustomSyntaxIcon from "@site/static/img/CustomSyntaxIcon.svg";
import ExtensibilityIcon from "@site/static/img/ExtensibilityIcon.svg";

const FeatureList = [
  {
    title: "High-Performance Markdown Parsing",
    Svg: PerformanceIcon,
    description:
      "Leverages pybind11 for optimized execution and fast rendering speeds."
  },
  {
    title: "Aethermark-Flavored Markdown (AFM)",
    Svg: CustomSyntaxIcon,
    description:
      "Extends standard Markdown with additional features for enhanced flexibility."
  },
  {
    title: "Extensible and Customizable",
    Svg: ExtensibilityIcon,
    description:
      "Designed for easy integration and extension to fit various use cases."
  }
];

function Feature({ title, Svg, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
