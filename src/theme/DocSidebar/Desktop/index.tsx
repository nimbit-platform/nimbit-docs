import React from "react";
import clsx from "clsx";
import { useThemeConfig } from "@docusaurus/theme-common";
import Logo from "@theme/Logo";
import Content from "@theme/DocSidebar/Desktop/Content";
import type { Props } from "@theme/DocSidebar/Desktop";
import SidebarMenu from "@site/src/components/SidebarMenu";

import styles from "./styles.module.css";

function DocSidebarDesktop({ path, sidebar }: Props) {
    const {
        navbar: { hideOnScroll },
    } = useThemeConfig();

    return (
        <div
            className={clsx(
                styles.sidebar,
                hideOnScroll && styles.sidebarWithHideableNavbar,
            )}
        >
            {hideOnScroll && (
                <Logo tabIndex={-1} className={styles.sidebarLogo} />
            )}
            <SidebarMenu />
            <Content path={path} sidebar={sidebar} />
        </div>
    );
}

export default React.memo(DocSidebarDesktop);
