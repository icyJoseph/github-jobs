import { Fragment } from "react";
import parse from "html-react-parser";
import { Card, Icon } from "react-materialize";
import { Element } from "domhandler/lib/node";

import { useSearchPositions } from "~/hooks/useSearchPositions";

export const Listings = () => {
  const positions = useSearchPositions((state) => state.positions);

  if (positions.length === 0) return <p>No results</p>;

  return (
    <ul>
      {positions.map(
        ({
          id,
          location,
          company,
          created_at,
          how_to_apply,
          title,
          type,
          url
        }) => {
          const apply = parse(how_to_apply, {
            replace: (domNode) => {
              if (domNode instanceof Element && domNode.attribs) {
                if (domNode.name === "a") {
                  return (
                    <a
                      href={domNode.attribs.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contact
                    </a>
                  );
                }
              }
            }
          });

          return (
            <li key={id}>
              <Card
                actions={[
                  <Fragment key="1">{apply}</Fragment>,
                  <a
                    key="2"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ORIGINAL LINK
                  </a>
                ]}
                className="blue-grey darken-1"
                closeIcon={<Icon>close</Icon>}
                revealIcon={<Icon>more_vert</Icon>}
                textClassName="white-text"
                title={title}
              >
                <p>
                  <span>{company}</span> - <span>{type}</span> -{" "}
                  <span>{location}</span> - <time>{created_at}</time>
                </p>
              </Card>
            </li>
          );
        }
      )}
    </ul>
  );
};
