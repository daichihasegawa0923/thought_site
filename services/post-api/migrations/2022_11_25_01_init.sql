CREATE SCHEMA `post` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin ;

CREATE TABLE `post`.`User` (
  `id` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `post`.`Post` (
  `id` VARCHAR(100) NOT NULL,
  `userId` VARCHAR(100) NOT NULL,
  `toUserId` VARCHAR(100) NULL,
  `message` VARCHAR(500) NOT NULL DEFAULT 'message',
  `likeCount` INT NULL DEFAULT 0,
  `storeInfoId` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `post_storeInfo`
    FOREIGN KEY (`storeInfoId`)
    REFERENCES `post`.`StoreInfo` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `post_user`
    FOREIGN KEY (`userId`)
    REFERENCES `post`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION,
  CONSTRAINT `post_toUser`
    FOREIGN KEY (`toUserId`)
    REFERENCES `post`.`User` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
