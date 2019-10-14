import { clone, pathOr } from 'ramda';
import convertParagraph from './convertParagraph';

const convertToOptimoBlocks = async jsonRaw => {
  const handleMissingType = block =>
    console.log(`Missing type field on block ${block.type}`); // eslint-disable-line no-console

  const typesToConvert = {
    paragraph: await convertParagraph,
  };

  const parseBlockByType = block => {
    if (!block || !block.type) {
      return null;
    }
    const { type } = block;

    const parsedBlock = (typesToConvert[type] || handleMissingType)(block);

    return parsedBlock;
  };

  const json = clone(jsonRaw);
  const blocks = pathOr([], ['content', 'blocks'], json);

  const parsedBlocks = blocks.map(parseBlockByType).filter(Boolean);

  return {
    ...json,
    content: {
      model: {
        blocks: parsedBlocks,
      },
    },
  };
};

export default convertToOptimoBlocks;
