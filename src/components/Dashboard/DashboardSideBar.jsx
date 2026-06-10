import {
  LayoutSideContentLeft,
  Bell,
  Envelope,
  Gear,
  House,
  Magnifier,
  Person,
} from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";

const DashboardSideBar = () => {
  const navItems = [
    { icon: House, hraf:'/', label: "Home" },
    { icon: Magnifier,hraf:'/dashboard/recruiter/jobs', label: "Jobs" },
    { icon: Magnifier,hraf:'/dashboard/recruiter/new', label: "Post a Job" },
    { icon: Person,hraf:'/dashboard/recruiter/company', label: "Company Profile" },
    { icon: Envelope, hraf:'/dashboard/recruiter/message', label: "Messages" },
    { icon: Person,hraf:'/dashboard/recruiter/profile', label: "Profile" },
    { icon: Gear, hraf:'/dashboard/recruiter/settings', label: "Settings" },
  ];
  const navContent = (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => (
        <Link href={item.hraf}
          key={item.label}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
          type="button"
        >
          <item.icon className="size-5 text-muted" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
  return (
    <>
      <aside className=" hidden lg:block border-r w-64 shrink-0 p-4 border-default">
        <div>{navContent}</div>
      </aside>

      <div className="lg:hidden block">
        <Drawer>
        <Button variant="secondary">
          <LayoutSideContentLeft />
          dashboard
        </Button>
        <Drawer.Backdrop>
          <Drawer.Content placement="left">
            <Drawer.Dialog>
              <Drawer.CloseTrigger />
              <Drawer.Header>
                <Drawer.Heading>Navigation</Drawer.Heading>
              </Drawer.Header>
              <Drawer.Body>{navContent}</Drawer.Body>
            </Drawer.Dialog>
          </Drawer.Content>
        </Drawer.Backdrop>
      </Drawer>
      </div>
    </>
  );
};

export default DashboardSideBar;
