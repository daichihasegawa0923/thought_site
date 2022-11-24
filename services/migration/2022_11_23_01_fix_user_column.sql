ALTER TABLE `user`.`User` 
ADD COLUMN `role` VARCHAR(100) NOT NULL DEFAULT 'USER' AFTER `isPublic`;

CREATE TABLE `user`.`Message` (
  `id` varchar(100) COLLATE utf8mb4_bin NOT NULL,
  `to` varchar(100) COLLATE utf8mb4_bin DEFAULT NULL,
  `owner` VARCHAR(100) NOT NULL,
  `content` varchar(500) COLLATE utf8mb4_bin DEFAULT NULL,
  `likeCount` int DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `message_message` (`to`),
  CONSTRAINT `message_message` FOREIGN KEY (`to`) REFERENCES `Message` (`id`),
  CONSTRAINT `message_owner`
    FOREIGN KEY (`owner`)
    REFERENCES `user`.`User` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

CREATE TABLE `user`.`Post` (
  `id` VARCHAR(100) NOT NULL,
  `storeName` VARCHAR(100) NULL,
  `messageId` VARCHAR(100) NOT NULL,
  `url` VARCHAR(1024) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `post_message`
    FOREIGN KEY (`messageId`)
    REFERENCES `user`.`Message` (`id`)
    ON DELETE CASCADE
    ON UPDATE NO ACTION
  );
