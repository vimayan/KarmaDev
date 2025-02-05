import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function TimeLine() {
  return (
    <VerticalTimeline lineColor={"red"}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        date="2011 - present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        iconClassName={"xs:ms-3 w-[40px] "}
        lineColor={"red"}

        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        lineColor={"rgb(245,238,233)"}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2008 - 2010"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2006 - 2008"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        // icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="April 2013"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        iconStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="November 2012"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        iconStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Agile Development Scrum Master
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        iconStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        lineColor={"red"}
        // icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{
          background: "rgb(16, 204, 82)",
          color: "#fff",
        }}
        contentStyle={{ background: "rgb(245,238,233)", color: "black" }}
        contentArrowStyle={{
          borderRight: "7px solid  rgb(33, 150, 243)",
        }}
        visible={false}
        // icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}

export default TimeLine;
