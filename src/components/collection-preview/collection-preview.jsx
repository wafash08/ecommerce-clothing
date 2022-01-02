import { useNavigate } from "react-router-dom";
import CollectionItem from "../collection-item/collection-item";

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./collection-preview.styled";

export default function CollectionPreview({ title, items, routeName }) {
  const navigate = useNavigate();

  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => navigate(`${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
}
